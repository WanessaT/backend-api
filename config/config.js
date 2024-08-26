
module.exports = {

  development: {
    username: 'postgres.wobxjclpfjmuzifqnrfp', // usuário do banco de dados
    password: 'backend-api-dripstore', // senha do banco de dados
    database: 'postgres', // nome do banco de dados
    host: 'aws-0-sa-east-1.pooler.supabase.com', // host do banco de dados
    port: 6543, // porta do banco de dados
    dialect: 'postgres', // tipo de dialeto
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false // necessário para conexões SSL com o Supabase
      }
    }
  },
  production: {
    username: 'postgres.wobxjclpfjmuzifqnrfp', // usuário do banco de dados
    password: 'backend-api-dripstore', // senha do banco de dados
    database: 'postgres', // nome do banco de dados
    host: 'aws-0-sa-east-1.pooler.supabase.com', // host do banco de dados
    port: 6543, // porta do banco de dados
    dialect: 'postgres', // tipo de dialeto
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false // necessário para conexões SSL com o Supabase
      }
    }
  },
  test: {
    username: 'postgres.wobxjclpfjmuzifqnrfp', // usuário do banco de dados
    password: 'backend-api-dripstore', // senha do banco de dados
    database: 'postgres', // nome do banco de dados
    host: 'aws-0-sa-east-1.pooler.supabase.com', // host do banco de dados
    port: 6543, // porta do banco de dados
    dialect: 'postgres', // tipo de dialeto
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false // necessário para conexões SSL com o Supabase
      }
    }
  }
};
