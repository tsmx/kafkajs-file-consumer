# KafkaJS file consumer

Consumer example for the [Using Apache Kafka for transferring files](https://tsmx.net/using-apache-kafka-for-transferring-files/) article.

Uses the [KafkaJS](https://kafka.js.org/) library for Kafka client functionality.

## Usage

First, [get Kafka up & running](https://tsmx.net/using-apache-kafka-for-transferring-files/#Getting_Kafka_up_running) and [create an appropriate topic](https://tsmx.net/using-apache-kafka-for-transferring-files/#Creating_a_topic) as described in the tutorial.

To consume file messages, simply start the consumer app. Received files from Kafka will be written to the `output/` subfolder.

```bash
$ node app.js
{"level":"INFO","timestamp":"2025-04-16T20:24:47.647Z","logger":"kafkajs","message":"[Consumer] Starting","groupId":"kafkajs-group"}
{"level":"INFO","timestamp":"2025-04-16T20:25:07.791Z","logger":"kafkajs","message":"[ConsumerGroup] Consumer has joined the group","groupId":"kafkajs-group","memberId":"kafkajs-file-consumer-fe505a61-5d2a-47ca-bbbc-07ec4df8c3d0","leaderId":"kafkajs-file-consumer-fe505a61-5d2a-47ca-bbbc-07ec4df8c3d0","isLeader":true,"memberAssignment":{"filetransfer":[0]},"groupProtocol":"RoundRobinAssigner","duration":20140}
File example.jpg written. (2690215 Bytes)
```

To produce file messages, use the [producer example](https://github.com/tsmx/kafkajs-file-producer).