import PAPacket from '../packet'
import { PACommandType } from './common'
import { PASubscriptionMask } from '../event'

export const subscribe = (requestId: number): PAPacket => {
  const packet: PAPacket = new PAPacket()
  packet.setCommand(PACommandType.PA_COMMAND_SUBSCRIBE)
  packet.setRequestId(requestId)
  packet.putU32(PASubscriptionMask.ALL)
  return packet
}

export const subscribeReply = (): object => {
  return {
    subscribed: true
  }
}