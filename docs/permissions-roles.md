# Permissões e papeis

## RBAC

- Owner (conta como um administrador)
- Administrator
- Volunteer
- Anonymous

## Tabela de permissões

| permission | administrator | volunteer | anonymous |
| --- | --- | --- | --- |
| Atualizar as observações de um atleta | ✅ | ⚠️ | ❌ |
| Atualizar os dados de um voluntário | ✅ | ❌ | ❌ |
| Visualizar o perfil do atleta | ✅ | ✅ | ❌ |
| Listar os atletas | ✅ | ✅ | ❌ |
| Atualizar os dados de um atletas | ✅ | ✅ | ❌ |
| Criar um novo atleta | ✅ | ✅ | ❌ |
| Visualizar os dados do responsável de um atleta | ✅ | ✅ | ❌ |
| Atualizar o status de um atleta | ✅ | ✅ | ❌ |
| Exportar os dados do atleta | ✅ | ✅ | ❌ |
| Atualizar os dados de um responsável | ✅ | ✅ | ❌ |
| Listar atletas por nome | ✅ | ✅ | ❌ |
| Atualizar os dados da anamnese de um atleta | ✅ | ✅ | ❌ |
| Visualizar as métricas da plataforma | ✅ | ✅ | ❌ |
| Importar os dados dos atletas  | ✅ | ✅ | ❌ |
| Trocar senha da conta | ⚠️ | ⚠️ | ❌ |

> ✅ = allowed ⚠️ = allow w/ conditions ❌ = not allowed

### Condições

- Somente é possível trocar a senha da própria conta
- Só pode atualizar as observações de um atleta