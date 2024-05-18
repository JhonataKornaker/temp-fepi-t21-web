# Requisitos funcionais

- [ ]  Deve ser possível cadastrar, editar e excluir um voluntário;
- [ ]  Deve ser possível trocar sua senha;
- [ ]  Deve ser possível se autenticar;
- [ ]  Deve ser possível obter o perfil de um usuário logado;
- [ ]  Deve ser possível obter o perfil de um atleta pelo nome;
- [ ]  Deve ser possível cadastrar, editar e excluir um atleta;
- [ ]  Deve ser possível cadastrar e editar um responsável;
- [ ]  Deve ser possível obter métricas dos atletas cadastrados na plataforma;
- [ ]  Deve ser possível cadastrar e editar um anamnese de um atleta
- [ ]  Deve ser possível importar dados de novos atletas

# Requisitos não funcionais

- [ ]  Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ]  Todas listas de dados precisam estar paginadas com 10 itens por página;
- [ ]  A senha do usuário precisa estar criptografada;
- [ ]  As telas devem ter boa usabilidade, permitindo que o usuário navegue pelo teclado
- [ ]  As telas devem ser responsivas para diversos aparelhos.

# Regras de negócio

- [ ]  Os usuários administradores e voluntários devem conseguir cadastrar novos atletas
- [ ]  Os usuários voluntários não devem conseguir cadastrar informações de atletas em áreas que eles não monitoram
- [ ]  O usuário administrador não deve poder cadastrar um voluntário com e-mail duplicado.
- [ ]  Os usuários administradores e voluntários não devem poder cadastrar duas anamneses para um atleta.
- [ ]  Caso os usuários importados já existam, deve-se atualizar os dados