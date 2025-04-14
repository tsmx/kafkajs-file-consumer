import { Kafka } from 'kafkajs';

const CLIENT_ID = 'kafkajs-file-consumer';
const KAFKA_SERVER = 'localhost:9092';
const CONSUMER_GROUP = 'kafkajs-group';
const TOPIC = 'my.test.topic';

const kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: [KAFKA_SERVER]
});

const consumer = kafka.consumer({ groupId: CONSUMER_GROUP });

await consumer.connect();

await consumer.subscribe({ topics: [TOPIC] });

await consumer.run({
    eachMessage: async ({ _topic, _partition, message, _heartbeat, _pause }) => {
        const fileBytes = Buffer.from(message.value);
        const fileName = message.headers['filename'].toString();
        console.log({ time: new Date(), fileName: fileName, fileBytes });
    }
});