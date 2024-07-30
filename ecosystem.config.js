module.exports = {
    apps: [
      {
        name: 'nestjs-app',
        script: './dist/main.js', // Ruta al archivo de entrada JavaScript generado por la compilación
        instances: 'max', // O un número específico de instancias
        exec_mode: 'cluster', // Utiliza cluster mode para escalar el número de instancias
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  