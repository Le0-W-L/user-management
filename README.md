# API de Gerenciamento de Usuários com RBAC

Uma API RESTful completa construída com Node.js e Express para gerenciar usuários e suas permissões através de um sistema de Controle de Acesso Baseado em Função (RBAC).

O projeto foi desenvolvido como um estudo aprofundado sobre arquitetura de software, segurança e integração de diferentes tecnologias de banco de dados.

## Principais Features
- CRUD Completo: Operações de Criar, Ler, Atualizar e Deletar usuários.
- Autenticação Segura: Implementação de JSON Web Tokens (JWT) para proteger as rotas.
- Refresh Tokens: Sistema para renovar tokens de acesso sem exigir novas credenciais.
- Controle de Acesso (RBAC): Diferentes níveis de permissão para diferentes tipos de usuários.
- Híbrido de Banco de Dados:
  - Sequelize (MySQL): Gerencia dados estruturados como usuários, perfis e permissões.
  - Mongoose (MongoDB): Utilizado para armazenar dados não estruturados, como logs de atividade.
- Containerização: Aplicação totalmente configurada para rodar em containers com Docker.
