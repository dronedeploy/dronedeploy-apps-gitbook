node ('linux'){
  timestamps {
    try {
      withEnv(["GIT_BRANCH=${env.BRANCH_NAME}"]) {
        stage ('Prepare'){
            checkout scm
        }
        stage ('Build'){
            sh "make -e package"
        }
        stage ('Publish'){
            uploadArtifact {
                application = "developer-site"
                sourceFiles = "build/*"
            }
        }
      }
    } catch (e) {
      currentBuild.result = "FAILED"

      if (["master", "stage", "prod"].contains(env.BRANCH_NAME)) {
        slackSend (
          channel: '#backend-guild', color: '#FF0000', teamDomain: 'dronedeploy',
          message: "@platform-engineers: DroneDeploy documentation branch \"${env.BRANCH_NAME}\" has failed. <${env.BUILD_URL}console|Details.>"
        )
      }
      throw e
    }
  }
}
