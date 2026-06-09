# 💇‍♀️ FikBella

Sistema de agendamento inteligente para salão de beleza, desenvolvido para reduzir o tempo gasto com atendimento via WhatsApp, organização da agenda e gerenciamento de clientes.

---

# 📖 Sobre o Projeto

O sistema FikBella nasceu a partir de um problema real observado em pequenos salões de beleza.

Muitos profissionais trabalham sozinhos e precisam dividir sua atenção entre:

* Atender clientes;
* Limpar e organizar o ambiente;
* Comprar produtos;
* Administrar o negócio;
* Responder mensagens;
* Realizar agendamentos;
* Divulgar o salão nas redes sociais.

Durante um atendimento, é comum que novas clientes enviem mensagens solicitando horários. Como nem sempre é possível responder imediatamente, oportunidades de negócio podem ser perdidas.

O objetivo do Sistema FikBella é automatizar esse processo e centralizar os agendamentos em uma única plataforma.

---

# 🎯 Objetivo Principal

Permitir que clientes solicitem horários sem depender de uma resposta imediata da profissional.

Isso reduz:

* Tempo gasto no WhatsApp;
* Interrupções durante atendimentos;
* Perda de clientes por demora na resposta;
* Erros de agendamento.

E aumenta:

* Organização;
* Produtividade;
* Taxa de conversão de clientes;
* Experiência do cliente.

---

# 🚀 Funcionalidades do MVP

## Área da Cliente

### Solicitação de Agendamento

A cliente poderá:

* Escolher o serviço desejado;
* Selecionar uma data disponível;
* Escolher um horário;
* Informar nome;
* Informar telefone;
* Enviar solicitação.

---

### Consulta de Agendamento

A cliente poderá:

* Visualizar agendamentos futuros;
* Consultar status do pedido.

---

## Área Administrativa

### Dashboard

Visão geral da agenda.

Informações exibidas:

* Agendamentos do dia;
* Próximos horários;
* Solicitações pendentes;
* Clientes cadastrados.

---

### Gerenciamento de Agenda

Permite:

* Aprovar agendamentos;
* Rejeitar agendamentos;
* Reagendar horários;
* Cancelar agendamentos.

---

### Cadastro de Serviços

Exemplos:

* Corte Feminino
* Escova
* Progressiva
* Sobrancelha
* Depilação
* Manicure
* Pedicure

Cada serviço possui:

* Nome
* Descrição
* Duração
* Valor

---

### Cadastro de Clientes

Armazenamento de:

* Nome
* Telefone
* Histórico de agendamentos
* Último atendimento

---

# 📱 Aplicativo Mobile

O sistema será desenvolvido em React Native utilizando Expo.

A profissional poderá acessar:

* Agenda do dia;
* Próximos horários;
* Solicitações pendentes;
* Dados das clientes.

Tudo diretamente pelo celular.

---

# 🏗 Arquitetura

## Frontend

Tecnologias:

* React Native
* Expo
* TypeScript

Responsabilidades:

* Interface da profissional;
* Interface da cliente;
* Consumo da API;
* Controle de navegação.

---

## Backend

Tecnologias:

* Node.js
* NestJS
* TypeScript

Responsabilidades:

* Regras de negócio;
* Autenticação;
* Gestão de agenda;
* Gestão de clientes;
* Gestão de serviços.

---

## Banco de Dados

Tecnologia:

* PostgreSQL

Responsabilidades:

* Persistência dos dados;
* Relacionamentos;
* Histórico de agendamentos.

---

# 🗄 Estrutura de Banco

## clients

| Campo      | Tipo      |
| ---------- | --------- |
| id         | UUID      |
| name       | VARCHAR   |
| phone      | VARCHAR   |
| created_at | TIMESTAMP |

---

## services

| Campo       | Tipo    |
| ----------- | ------- |
| id          | UUID    |
| name        | VARCHAR |
| description | TEXT    |
| duration    | INTEGER |
| price       | DECIMAL |

---

## appointments

| Campo      | Tipo      |
| ---------- | --------- |
| id         | UUID      |
| client_id  | UUID      |
| service_id | UUID      |
| date       | DATE      |
| time       | TIME      |
| status     | VARCHAR   |
| created_at | TIMESTAMP |

---

# 📊 Fluxo do Sistema

## Fluxo da Cliente

1. Abre o aplicativo.
2. Escolhe um serviço.
3. Seleciona data.
4. Seleciona horário.
5. Envia solicitação.

---

## Fluxo da Profissional

1. Recebe notificação.
2. Analisa solicitação.
3. Aprova ou rejeita.
4. Cliente recebe confirmação.

---

# 🔐 Segurança

* Autenticação JWT
* Senhas criptografadas
* Controle de acesso por perfil
* Proteção de rotas privadas

---

# 🎨 Futuras Funcionalidades

## Fase 2

* Confirmação automática via WhatsApp;
* Lembretes automáticos;
* Lista de espera;
* Bloqueio de horários;
* Feriados e folgas.

---

## Fase 3

* Relatórios mensais;
* Controle de faturamento;
* Controle de comissões.

---

# 📈 Benefícios Esperados

* Menos tempo respondendo mensagens;
* Mais organização;
* Menos perda de clientes;
* Melhor experiência de atendimento;
* Crescimento do salão sem aumento da carga administrativa.

---

# 👩‍💻 Desenvolvedores

Projeto idealizado e desenvolvido por Duda, Guilherme e Mateus como uma solução para digitalização e automação de pequenos salões de beleza.

---

> "O objetivo não é apenas organizar uma agenda. É devolver tempo para quem passa o dia cuidando dos clientes."