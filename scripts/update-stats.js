/**
 * Script de consolidação de métricas em tempo real (NuGet + NPM).
 * Executa sem dependências externas utilizando o fetch nativo do Node.js 18+.
 * Recupera dados retroativos históricos completos do NuGet e do NPM.
 */

const fs = require('fs');
const path = require('path');

const NUGET_SEARCH_URL = 'https://azuresearch-usnc.nuget.org/query?q=owner:ThaylonMALopes&take=100';
const NPM_MONTHLY_URL = 'https://api.npmjs.org/downloads/point/last-month/tl-foundry';
const NPM_WEEKLY_URL = 'https://api.npmjs.org/downloads/point/last-week/tl-foundry';
const README_PATH = path.join(__dirname, '..', 'README.md');

async function fetchJson(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Node-Metrics-Collector' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error(`Erro ao consultar ${url}:`, err.message);
    return null;
  }
}

async function getNpmAllTimeDownloads(packageName) {
  const today = new Date().toISOString().split('T')[0];
  const url = `https://api.npmjs.org/downloads/range/2025-01-01:${today}/${packageName}`;
  const data = await fetchJson(url);
  if (data && Array.isArray(data.downloads)) {
    return data.downloads.reduce((acc, cur) => acc + (cur.downloads || 0), 0);
  }
  return 0;
}

async function collectMetrics() {
  console.log('Iniciando coleta de metricas do ecossistema...');

  // 1. Coleta do NuGet
  const nugetData = await fetchJson(NUGET_SEARCH_URL);
  let totalNugetDownloads = 0;
  let nugetPackageCount = 0;

  if (nugetData && Array.isArray(nugetData.data)) {
    nugetPackageCount = nugetData.data.length;
    for (const pkg of nugetData.data) {
      totalNugetDownloads += (pkg.totalDownloads || 0);
    }
  }

  // 2. Coleta do NPM (tl-foundry)
  const npmAllTime = await getNpmAllTimeDownloads('tl-foundry');
  const npmMonthly = await fetchJson(NPM_MONTHLY_URL);
  const npmWeekly = await fetchJson(NPM_WEEKLY_URL);

  const npmMonthlyDownloads = npmMonthly ? (npmMonthly.downloads || 0) : 0;
  const npmWeeklyDownloads = npmWeekly ? (npmWeekly.downloads || 0) : 0;

  // Total acumulado
  const grandTotalDownloads = totalNugetDownloads + npmAllTime;

  console.log('--- Resumo das Metricas Coletadas ---');
  console.log(`Pacotes NuGet:               ${nugetPackageCount}`);
  console.log(`Downloads NuGet (Historico): ${totalNugetDownloads.toLocaleString('pt-BR')}`);
  console.log(`NPM tl-foundry (Historico):  ${npmAllTime.toLocaleString('pt-BR')}`);
  console.log(`Total Consolidado:           ${grandTotalDownloads.toLocaleString('pt-BR')}+ downloads`);

  // 3. Atualizacao do README.md
  if (fs.existsSync(README_PATH)) {
    let readme = fs.readFileSync(README_PATH, 'utf-8');

    const totalDownloadsFormatted = grandTotalDownloads.toLocaleString('pt-BR');
    const totalBadgeUrl = `https://img.shields.io/badge/Downloads%20Consolidados-${encodeURIComponent(totalDownloadsFormatted + '+')}-2ea44f?style=flat-square&logo=github`;
    const totalBadgeHtml = `<a href="https://www.nuget.org/profiles/ThaylonMALopes">\n      <img src="${totalBadgeUrl}" alt="Total Downloads" />\n    </a>`;

    const nugetBadgeUrl = `https://img.shields.io/badge/NuGet-${nugetPackageCount}%20Pacotes%20Oficiais-004880?style=flat-square&logo=nuget`;
    const nugetBadgeHtml = `<a href="https://www.nuget.org/profiles/ThaylonMALopes">\n      <img src="${nugetBadgeUrl}" alt="NuGet Packages" />\n    </a>`;

    readme = replaceBlock(readme, 'TOTAL_DOWNLOADS', totalBadgeHtml);
    readme = replaceBlock(readme, 'NUGET_PACKAGES', nugetBadgeHtml);

    const now = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    readme = replaceTag(readme, 'UPDATED_AT', now);

    fs.writeFileSync(README_PATH, readme, 'utf-8');
    console.log('README.md atualizado com sucesso com badges limpos!');
  } else {
    console.warn('README.md nao encontrado em:', README_PATH);
  }
}

function replaceBlock(content, tag, replacement) {
  const regex = new RegExp(`(<!-- METRICS:${tag} -->)[\\s\\S]*?(<!-- \\/METRICS:${tag} -->)`, 'g');
  if (regex.test(content)) {
    return content.replace(regex, `$1\n    ${replacement}\n    $2`);
  }
  return content;
}

function replaceTag(content, tag, value) {
  const regex = new RegExp(`(<!-- METRICS:${tag} -->)(.*?)(<!-- \\/METRICS:${tag} -->)`, 'gs');
  if (regex.test(content)) {
    return content.replace(regex, `$1${value}$3`);
  }
  return content;
}

collectMetrics().catch(console.error);
