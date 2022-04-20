
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'

export const backendConfig = () => {
  return {
    framework: "express",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://d276f881bab211ecafb6277fa4e3aa94-us-east-1.aws.supertokens.io:3568",
      apiKey: "AmiorLV6DIooSM9CFcM9wemh2R-NnH",
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init(),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  }
}

