import {
  DynamoDBClient,
  DynamoDBClientConfig,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/client-dynamodb'
import { IMemory } from '@interfaces/memories'

export class Repository {
  private client: DynamoDBClient
  constructor(config: DynamoDBClientConfig) {
    this.client = new DynamoDBClient(config)
  }

  // TODO: I'll suppose This repository have the responsability of the memories
  // at least in this momment while I think how to change the architecture
  // Of the repository
  async getMemories(): Promise<IMemory[]> {
    // TODO: Maybe this command will be in the model instead
    const defaultImg =
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/41/44/ea.jpg'
    const params: ScanCommandInput = {
      TableName: 'Memory',
      ProjectionExpression: 'Id, Img',
    }
    const command = new ScanCommand(params)
    try {
      const res = await this.client.send(command)
      if (!res.Items) return []
      return res.Items.map((item) => ({
        id: item['Id'].S || '',
        img: item['Img'].S || defaultImg,
      }))
    } catch (err) {
      console.log(err)
      return []
    }
  }
}
