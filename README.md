
<img align="right" width="155" src="assets/icon.svg" alt="TL Cube" style="margin-left: 20px; margin-bottom: 10px;" />
 <div align="center">


  # 👋 Thaylon Lopes
  ### **Engenheiro de Software | Arquiteto de Software Distribuído**

  <p align="center">
    <a href="https://github.com/thaylonlopes">
      <img src="https://komarev.com/ghpvc/?username=thaylonlopes&label=Visualiza%C3%A7%C3%B5es%20do%20Perfil&color=0078D4&style=flat-square" alt="Profile Views" />
    </a>
    <!-- METRICS:NUGET_PACKAGES -->
    <a href="https://www.nuget.org/profiles/ThaylonMALopes">
      <img src="https://img.shields.io/badge/NuGet-30%20Pacotes%20Oficiais-004880?style=flat-square&logo=nuget" alt="NuGet Packages" />
    </a>
    <!-- /METRICS:NUGET_PACKAGES -->
    <a href="https://www.npmjs.com/package/tl-foundry">
      <img src="https://img.shields.io/badge/NPM-tl--foundry%20(React)-CB3837?style=flat-square&logo=npm" alt="NPM tl-foundry" />
    </a>
    <!-- METRICS:TOTAL_DOWNLOADS -->
    <a href="https://www.nuget.org/profiles/ThaylonMALopes">
      <img src="https://img.shields.io/badge/Downloads%20Consolidados-21.448%2B-2ea44f?style=flat-square&logo=github" alt="Total Downloads" />
    </a>
    <!-- /METRICS:TOTAL_DOWNLOADS -->
    <a href="https://www.linkedin.com/in/thaylon-lopes/">
      <img src="https://img.shields.io/badge/LinkedIn-Thaylon%20Lopes-0077B5?style=flat-square&logo=linkedin" alt="LinkedIn" />
    </a>
  </p>

  <p align="center">
    Engenheiro de Software com pós-graduação em <strong>Arquitetura de Software Distribuído</strong> e trajetória de quase 10 anos projetando e sustentando soluções resilientes de missão crítica com C#, ecossistema .NET, mensageria e alta volumetria em grandes corporações do mercado financeiro e industrial:<br/>
    <strong>XP Investimentos</strong> • <strong>BTG Pactual</strong> • <strong>Pottencial Seguradora</strong> • <strong>Aperam South America</strong>
  </p>

</div>
<br clear="right" />

---

## 🚀 Acelerador de Arquitetura (.NET Starter Kit)

Template oficial para inicialização de microsserviços e Web APIs em .NET 9 estruturados com Clean Architecture, DDD, CQRS (MediatR), Transactional Outbox Pattern, Testcontainers e testes de carga k6.

| Template | Descrição | Runtime | Versão | Downloads | Documentação |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **[`TL.ResilientCore.Template`](https://github.com/thaylonlopes/TL.ResilientCore)** | Starter kit corporativo: Clean Architecture, CQRS, Outbox com RabbitMQ/Kafka, Testcontainers e k6 | `net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.ResilientCore.Template?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.ResilientCore.Template) | [![Downloads](https://img.shields.io/nuget/dt/TL.ResilientCore.Template?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.ResilientCore.Template) | [📘 README](https://github.com/thaylonlopes/TL.ResilientCore#readme) • [🏛️ Arquitetura](https://github.com/thaylonlopes/TL.ResilientCore/blob/main/TL.ResilientCore/docs/arquitetura/visao-geral.md) |

```bash
# 1. Instalar o template oficial
dotnet new install TL.ResilientCore.Template

# 2. Criar nova solução estruturada
dotnet new tl-resilientcore -n MeuProjetoCorporativo
```

---

## 🗺️ Mapa de Arquitetura do Ecossistema

Visão de como as soluções se conectam em cada camada:

```mermaid
flowchart TD
    classDef nuget fill:#0a2540,stroke:#0078D4,stroke-width:1.5px,color:#fff;
    classDef npm fill:#3d1111,stroke:#CB3837,stroke-width:1.5px,color:#fff;
    classDef template fill:#0d2818,stroke:#2ea44f,stroke-width:2px,color:#fff;

    subgraph Scaffolding["🚀 Início do Projeto"]
        Template["TL.ResilientCore.Template<br/><i>Clean Arch • DDD • CQRS • Outbox</i>"]:::template
    end

    subgraph Frontend["🎨 Frontend Web"]
        TLFoundry["tl-foundry (NPM)<br/><i>Design System React • TypeScript • Tailwind</i>"]:::npm
    end

    subgraph Host["🌐 Web API (ASP.NET Core)"]
        Middleware["TL.MiddlewareLibrary<br/><i>Tratamento de Erros • Rate Limiting</i>"]:::nuget
        Health["TL.HealthCheck<br/><i>Liveness • Readiness • Probes K8s</i>"]:::nuget
    end

    subgraph Core["🏛️ Núcleo da Aplicação"]
        subgraph AppLayer["Aplicação (Use Cases & CQRS)"]
            Contracts["TL.BaseContracts<br/><i>Commands • Queries • Result Pattern</i>"]:::nuget
            MetaApp["TL.ExtensionLibrary.Application<br/><i>Metapacote de Aplicação</i>"]:::nuget
        end
        subgraph DomainLayer["Domínio (Regras de Negócio)"]
            MetaDom["TL.ExtensionLibrary.Domain<br/><i>Metapacote de Domínio Puro</i>"]:::nuget
            Extensions["TL.EnumExtensionsLibrary • TL.CollectionExtensionsLibrary"]:::nuget
        end
    end

    subgraph Infra["⚡ Infraestrutura, Dados & Mensageria"]
        subgraph Data["Banco de Dados & Cache"]
            Dapper["TL.Dapper.Helpers (SQL Server / Postgres)"]:::nuget
            Mongo["TL.MongoDriver.Helpers (MongoDB Transacional)"]:::nuget
            Cache["TL.Caching.Helpers (L1 Memória + L2 Redis)"]:::nuget
            Mapping["TL.DataMapping • TL.AuditLogger"]:::nuget
        end
        subgraph Messaging["Mensageria & Resiliência"]
            Kafka["TL.Kafka (Streaming • DLT • CloudEvents)"]:::nuget
            Rabbit["TL.RabbitMQ (AMQP • DLQ • Publisher Confirms)"]:::nuget
            Resilience["TL.Resilience (Polly v8 • Circuit Breaker)"]:::nuget
            MetaInfra["TL.ExtensionLibrary.Infrastructure"]:::nuget
        end
    end

    Scaffolding -.->|Gera estrutura inicial| Core
    Frontend -->|HTTPS / REST| Host
    Host --> Core
    Core --> Infra

    click Template "https://github.com/thaylonlopes/TL.ResilientCore" "Abrir Repositório"
    click TLFoundry "https://www.npmjs.com/package/tl-foundry" "Abrir no NPM"
    click Middleware "https://www.nuget.org/packages/TL.MiddlewareLibrary" "Abrir no NuGet"
    click Health "https://www.nuget.org/packages/TL.HealthCheck" "Abrir no NuGet"
    click Contracts "https://www.nuget.org/packages/TL.BaseContracts" "Abrir no NuGet"
    click Kafka "https://www.nuget.org/packages/TL.Kafka" "Abrir no NuGet"
    click Rabbit "https://www.nuget.org/packages/TL.RabbitMQ" "Abrir no NuGet"
    click Dapper "https://www.nuget.org/packages/TL.Dapper.Helpers" "Abrir no NuGet"
    click Mongo "https://www.nuget.org/packages/TL.MongoDriver.Helpers" "Abrir no NuGet"
    click Cache "https://www.nuget.org/packages/TL.Caching.Helpers" "Abrir no NuGet"
    click Resilience "https://www.nuget.org/packages/TL.Resilience" "Abrir no NuGet"
```

---

## 📦 Metapacotes Clean Architecture (`TL.ExtensionLibrary`)

Conjuntos modulares organizados por camada para evitar acoplamento indevido e garantir isolamento de dependências.

```
TL.ExtensionLibrary.Infrastructure (Queryable, HttpClient, Assembly)
    └── TL.ExtensionLibrary.Application (Object, ClaimsPrincipal)
            └── TL.ExtensionLibrary.Domain (String, Numeric, DateTime, Enum, Collection)
```

| Metapacote | Camada / Escopo | O que inclui | Runtimes | Versão | Downloads | Arquitetura |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **[`TL.ExtensionLibrary.Domain`](https://github.com/thaylonlopes/ExtensionLibrary)** | **Domínio Puro** | Extensões fundamentais sem dependências de infra, web ou banco (`String`, `Numeric`, `DateTime`, `Enum`, `Collection`) | `net8.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.ExtensionLibrary.Domain?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.ExtensionLibrary.Domain) | [![Downloads](https://img.shields.io/nuget/dt/TL.ExtensionLibrary.Domain?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.ExtensionLibrary.Domain) | [🏛️ Arquitetura](https://github.com/thaylonlopes/ExtensionLibrary/tree/master/docs/arquitetura) |
| **[`TL.ExtensionLibrary.Application`](https://github.com/thaylonlopes/ExtensionLibrary)** | **Aplicação** | Manipulação de DTOs, segurança e identidade (`Object`, `ClaimsPrincipal`) + inclui transitivamente o pacote `Domain` | `net8.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.ExtensionLibrary.Application?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.ExtensionLibrary.Application) | [![Downloads](https://img.shields.io/nuget/dt/TL.ExtensionLibrary.Application?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.ExtensionLibrary.Application) | [🏛️ Arquitetura](https://github.com/thaylonlopes/ExtensionLibrary/tree/master/docs/arquitetura) |
| **[`TL.ExtensionLibrary.Infrastructure`](https://github.com/thaylonlopes/ExtensionLibrary)** | **Infraestrutura** | Consultas dinâmicas, HTTP resiliente e scanning de assemblies (`Queryable`, `HttpClient`, `Assembly`) + inclui `Application` e `Domain` | `net8.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.ExtensionLibrary.Infrastructure?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.ExtensionLibrary.Infrastructure) | [![Downloads](https://img.shields.io/nuget/dt/TL.ExtensionLibrary.Infrastructure?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.ExtensionLibrary.Infrastructure) | [🏛️ Arquitetura](https://github.com/thaylonlopes/ExtensionLibrary/tree/master/docs/arquitetura) |

---

## 🏛️ Catálogo de Módulos (.NET / NuGet)

Bibliotecas especializadas para mensageria, resiliência, dados e fundação de contratos.

| Pacote | Finalidade | Runtimes | Versão | Downloads | Documentação |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **[`TL.BaseContracts`](https://github.com/thaylonlopes/BuildingBlocks)** | Contratos base em C# puro: Commands, Queries, Events, Result Pattern, Errors e RFC 7807 | `net8.0`<br/>`net9.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.BaseContracts?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.BaseContracts) | [![Downloads](https://img.shields.io/nuget/dt/TL.BaseContracts?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.BaseContracts) | [📘 README](https://github.com/thaylonlopes/BuildingBlocks#readme) • [🏛️ ADR-001](https://github.com/thaylonlopes/BuildingBlocks/blob/main/docs/adr/ADR-001-tl-basecontracts.md) |
| **[`TL.Resilience`](https://github.com/thaylonlopes/BuildingBlocks)** | Políticas com Polly v8: Retry com Jitter decorrelacionado, Circuit Breaker e Timeout | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.Resilience?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.Resilience) | [![Downloads](https://img.shields.io/nuget/dt/TL.Resilience?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.Resilience) | [📘 README](https://github.com/thaylonlopes/BuildingBlocks#readme) • [🏛️ ADR-007](https://github.com/thaylonlopes/BuildingBlocks/blob/main/docs/adr/ADR-007-tl-resilience.md) |
| **[`TL.MiddlewareLibrary`](https://github.com/thaylonlopes/TL.MiddlewareLibrary)** | Middlewares para tratamento global de exceções, Correlation ID e Rate Limiting por IP | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.MiddlewareLibrary?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.MiddlewareLibrary) | [![Downloads](https://img.shields.io/nuget/dt/TL.MiddlewareLibrary?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.MiddlewareLibrary) | [📘 README](https://github.com/thaylonlopes/TL.MiddlewareLibrary#readme) • [🏛️ ADR-001](https://github.com/thaylonlopes/TL.MiddlewareLibrary/blob/main/docs/adr/ADR-001-arquitetura-e-convencoes.md) |
| **[`TL.HealthCheck`](https://github.com/thaylonlopes/BuildingBlocks)** | Health Checks padronizados (Liveness, Readiness, UI Client) para ASP.NET Core e Kubernetes | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.HealthCheck?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.HealthCheck) | [![Downloads](https://img.shields.io/nuget/dt/TL.HealthCheck?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.HealthCheck) | [📘 README](https://github.com/thaylonlopes/BuildingBlocks#readme) • [🏛️ ADR-002](https://github.com/thaylonlopes/BuildingBlocks/blob/main/docs/adr/ADR-002-tl-healthcheck.md) |
| **[`TL.RabbitMQ`](https://github.com/thaylonlopes/Messaging)** | AMQP com Publisher Confirms, Dead-Letter Queue (.dlq) automática e desserialização via `Span<T>` | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.RabbitMQ?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.RabbitMQ) | [![Downloads](https://img.shields.io/nuget/dt/TL.RabbitMQ?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.RabbitMQ) | [📘 README](https://github.com/thaylonlopes/Messaging#readme) • [🏛️ ADR-001](https://github.com/thaylonlopes/Messaging/blob/main/docs/adr/ADR-001-tl-rabbitmq.md) |
| **[`TL.Kafka`](https://github.com/thaylonlopes/Messaging)** | Apache Kafka com Polly v8, Dead Letter Topic (.dlt), CloudEvents e headers estruturados | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.Kafka?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.Kafka) | [![Downloads](https://img.shields.io/nuget/dt/TL.Kafka?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.Kafka) | [📘 README](https://github.com/thaylonlopes/Messaging#readme) • [🏛️ ADR-002](https://github.com/thaylonlopes/Messaging/blob/main/docs/adr/ADR-002-tl-kafka.md) |
| **[`TL.Dapper.Helpers`](https://github.com/thaylonlopes/DataHelpers)** | Repositórios SQL com Dapper, paginação dinâmica por cursor e consultas otimizadas | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.Dapper.Helpers?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.Dapper.Helpers) | [![Downloads](https://img.shields.io/nuget/dt/TL.Dapper.Helpers?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.Dapper.Helpers) | [📘 README](https://github.com/thaylonlopes/DataHelpers#readme) • [🏛️ ADR-004](https://github.com/thaylonlopes/DataHelpers/blob/main/docs/adr/ADR-004-pacote-dapper-helpers.md) |
| **[`TL.MongoDriver.Helpers`](https://github.com/thaylonlopes/DataHelpers)** | Repositórios MongoDB com suporte a transações atômicas via MongoContext | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.MongoDriver.Helpers?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.MongoDriver.Helpers) | [![Downloads](https://img.shields.io/nuget/dt/TL.MongoDriver.Helpers?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.MongoDriver.Helpers) | [📘 README](https://github.com/thaylonlopes/DataHelpers#readme) • [🏛️ ADR-008](https://github.com/thaylonlopes/DataHelpers/blob/main/docs/adr/ADR-008-pacote-mongodriver-helpers.md) |
| **[`TL.Caching.Helpers`](https://github.com/thaylonlopes/DataHelpers)** | Cache multinível híbrido (L1 memória + L2 Redis) com resiliência e locking distribuído | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.Caching.Helpers?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.Caching.Helpers) | [![Downloads](https://img.shields.io/nuget/dt/TL.Caching.Helpers?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.Caching.Helpers) | [📘 README](https://github.com/thaylonlopes/DataHelpers#readme) • [🏛️ ADR-002](https://github.com/thaylonlopes/DataHelpers/blob/main/docs/adr/ADR-002-pacote-caching-helpers.md) |
| **[`TL.DataMapping`](https://github.com/thaylonlopes/DataHelpers)** | Mapeamento de propriedades compilado via Expression Trees com Bounded LRU Cache thread-safe | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.DataMapping?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.DataMapping) | [![Downloads](https://img.shields.io/nuget/dt/TL.DataMapping?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.DataMapping) | [📘 README](https://github.com/thaylonlopes/DataHelpers#readme) • [🏛️ ADR-001](https://github.com/thaylonlopes/DataHelpers/blob/main/docs/adr/ADR-001-pacote-datamapping.md) |
| **[`TL.AuditLogger`](https://github.com/thaylonlopes/DataHelpers)** | Trilha de auditoria CRUD estruturada com mascaramento de dados sensíveis e sanitização | `net8.0`<br/>`net9.0` | [![NuGet](https://img.shields.io/nuget/v/TL.AuditLogger?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.AuditLogger) | [![Downloads](https://img.shields.io/nuget/dt/TL.AuditLogger?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.AuditLogger) | [📘 README](https://github.com/thaylonlopes/DataHelpers#readme) • [🏛️ ADR-003](https://github.com/thaylonlopes/DataHelpers/blob/main/docs/adr/ADR-003-pacote-auditlogger.md) |
| **[`TL.EnumExtensionsLibrary`](https://github.com/thaylonlopes/ExtensionLibrary)** | Utilitários para Enums com cache thread-safe e resolução rápida de descrições | `net8.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.EnumExtensionsLibrary?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.EnumExtensionsLibrary) | [![Downloads](https://img.shields.io/nuget/dt/TL.EnumExtensionsLibrary?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.EnumExtensionsLibrary) | [📘 README](https://github.com/thaylonlopes/ExtensionLibrary#readme) • [🏛️ ADR-003](https://github.com/thaylonlopes/ExtensionLibrary/blob/master/docs/adr/ADR-003-enum-extensions-library.md) |
| **[`TL.CollectionExtensionsLibrary`](https://github.com/thaylonlopes/ExtensionLibrary)** | Paginação em memória por keyset, batching (`ChunkBy`) e fatiamento sem alocações desnecessárias | `net8.0`<br/>`netstandard2.0` | [![NuGet](https://img.shields.io/nuget/v/TL.CollectionExtensionsLibrary?style=flat-square&logo=nuget&color=004880)](https://www.nuget.org/packages/TL.CollectionExtensionsLibrary) | [![Downloads](https://img.shields.io/nuget/dt/TL.CollectionExtensionsLibrary?style=flat-square&color=2ea44f)](https://www.nuget.org/packages/TL.CollectionExtensionsLibrary) | [📘 README](https://github.com/thaylonlopes/ExtensionLibrary#readme) • [🏛️ ADR-007](https://github.com/thaylonlopes/ExtensionLibrary/blob/master/docs/adr/ADR-007-collection-extensions-library.md) |

---

### 🎨 Frontend Corporativo (NPM / React)

| Pacote | Finalidade | Stack | Versão | Downloads | Links |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **[`tl-foundry`](https://www.npmjs.com/package/tl-foundry)** | Design System corporativo com tabelas virtualizadas (`DataTable`, `TreeTable`), formulários dinâmicos e acessibilidade WCAG | `React 18/19`<br/>`TypeScript`<br/>`Tailwind CSS` | [![NPM Version](https://img.shields.io/npm/v/tl-foundry?style=flat-square&logo=npm&color=CB3837)](https://www.npmjs.com/package/tl-foundry) | [![NPM Downloads](https://img.shields.io/npm/dt/tl-foundry?style=flat-square&color=CB3837)](https://www.npmjs.com/package/tl-foundry) | [📘 NPM Package](https://www.npmjs.com/package/tl-foundry)<br/>[🎨 Storybook](https://main--6a79b8b686500cbc56063fb1.chromatic.com/) |

---

## 🛠️ Stack Tecnológica

<div align="center">

| Área | Tecnologias & Ferramentas |
| :--- | :--- |
| **Back-end & Linguagens** | `C#` • `.NET 8` • `.NET 9` • `ASP.NET Core` • `Entity Framework Core` • `Dapper` • `MediatR` |
| **Mensageria & Streaming** | `Apache Kafka` • `RabbitMQ` • `CloudEvents` • `Transactional Outbox` |
| **Bancos de Dados & Cache** | `SQL Server` • `PostgreSQL` • `Oracle` • `MongoDB` • `Redis` *(Cache L1/L2)* |
| **Front-end & UI** | `React 18/19` • `TypeScript` • `Tailwind CSS` • `Storybook` • `Chromatic` |
| **Arquitetura & Design** | `Domain-Driven Design (DDD)` • `CQRS` • `Clean Architecture` • `Event-Driven Architecture` • `RFC 7807` |
| **Testes & DevOps** | `GitHub Actions` • `Azure DevOps` • `Docker` • `Testcontainers` • `k6` • `xUnit` • `SonarQube` |

</div>

---

<div align="center">
  <sub>Telemetria de downloads sincronizada via GitHub Actions. Última atualização: <!-- METRICS:UPDATED_AT -->26/09/2026<!-- /METRICS:UPDATED_AT -->.</sub>
</div>
