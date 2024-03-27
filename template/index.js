import { File, Text } from '@asyncapi/generator-react-sdk'
import { TopicFunction } from '../components/TopicFunction'

export default function ({ asyncapi, params }) {
    return (
        <File name="client.py">
            <Text newLines={2}>import paho.mqtt.client as mqtt</Text>

            <Text newLines={2}>mqttBroker = "{asyncapi.servers().get(params.server).url()}"</Text>

            <Text newLines={2}>class {asyncapi.info().title().replaceAll(' ', '')}Client:</Text>

            <Text indent={2} newLines={2}>
                {`def __init__(self):
            self.client = mqtt.Client()
            self.client.connect(mqttBroker)`}
            </Text>

            <Text indent={2}>
                <TopicFunction channels={asyncapi.channels().filterByReceive()} />
            </Text>
        </File>
    )
}



// // 1
// import { File, Text } from '@asyncapi/generator-react-sdk'
// export default function ({ asyncapi, params }) {
//     return (
//         <File name="client.py">
//             // 2
//             <Text newLines={2}>import paho.mqtt.client as mqtt</Text>
//             // 3
//             <Text newLines={2}>mqttBroker = "{asyncapi.servers().get(params.server).url()}"</Text>
//             // 4
//             <Text newLines={2}>class {asyncapi.info().title().replaceAll(' ', '')}Client:</Text>
//             // 5
//             <Text indent={2} newLines={2}>
//                 {`def __init__(self):
//             self.client = mqtt.Client()
//             self.client.connect(mqttBroker)`}
//             </Text>
//         </File>
//     )
// }

// import { File } from '@asyncapi/generator-react-sdk';
//
// export default function ({ asyncapi }) {
//     return (
//         <File name="client.py">
//             {`import paho.mqtt.client as mqtt
//
// mqttBroker = "${asyncapi.servers().get(params.server).url()}"
//
// class TemperatureServiceClient:
//     def __init__(self):
//         self.client = mqtt.Client()
//         self.client.connect(mqttBroker)
//
//
//     def sendTemperatureChange(self, id):
//         topic = "temperature/changed"
//         self.client.publish(topic, id)`}
//         </File>
//     )
// }
