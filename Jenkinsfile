pipeline {
    agent any

    stages {
        stage('Preparation') {
            steps {
               git branch: 'master', url: 'https://github.com/SPECCHIODB/specchio.ch.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/specchio.ch/*'
                sh 'cp -r src/.vuepress/dist/. /var/www/specchio.ch/'
            }
        }
    }
}