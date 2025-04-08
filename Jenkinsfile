pipeline {
    agent any
    environment {
        NODE_VERSION = '22' // Cambia si usas otra versión de Node.js
    }
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Clonando el repositorio...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    try {
                        echo '⚙️ Instalando dependencias...'
                        bat 'npm install'
                        bat 'npm run build'
} catch (Exception e) {
                        error('❌ Error en la etapa de Build')
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    try {
                        echo '🧪 Ejecutando pruebas...'
                        bat 'npm test'
} catch (Exception e) {
                        error('❌ Error en la etapa de Test')
                    }
                }
            }
        }
             stage('Save Coverage Report') {
            steps {
                script {
                    try {
                        echo ':nota: Guardando el reporte de cobertura...'
                        bat 'mkdir coverage-reports && xcopy /E /I /Y coverage coverage-reports' // Copia el reporte de cobertura
                    } catch (Exception e) {
                        error(':x: Error al guardar el reporte de cobertura')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                        echo '🚀 Desplegando aplicación...'
                        bat 'npm start &'
} catch (Exception e) {
                        error('❌ Error en la etapa de Deploy')
                    }
                }
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline completado con éxito'
        }
        failure {
            echo '❌ El pipeline ha fallado'
        }
    }
}
