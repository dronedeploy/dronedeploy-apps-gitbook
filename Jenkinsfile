@Library('dronedeploy@0.0.11') _
node ('linux'){
  timestamps {
    try {
      withEnv(["GIT_BRANCH=${env.BRANCH_NAME}"]) {
        stage ('Prepare'){
            checkout scm
            sh 'make -e init'
        }
        stage ('Build'){
            sh "make -e package"
        }
        stage ('Publish'){
          step([$class: 'S3BucketPublisher',
                dontWaitForConcurrentBuildCompletion: true,
                entries: [[
                              bucket: 'drone-deploy-artifacts/developer-site/' + env.BRANCH_NAME,
                              excludedFile: '',
                              flatten: false,
                              gzipFiles: true,
                              keepForever: false,
                              managedArtifacts: false,
                              noUploadOnFailure: true,
                              selectedRegion: 'us-east-1',
                              showDirectlyInBrowser: true,
                              sourceFile: 'build/**/*',
                              storageClass: 'STANDARD',
                              uploadFromSlave: true,
                              useServerSideEncryption: false
                          ]],
                profileName: 'jenkins', userMetadata: []
          ])
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
