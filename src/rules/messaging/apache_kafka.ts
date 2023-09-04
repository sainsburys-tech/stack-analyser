import { register } from '../../register.js';

register({
  tech: 'apache_kafka',
  name: 'Apache Kafka',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'bitnami/kafka' },
    { type: 'terraform', name: 'registry.terraform.io/confluentinc/confluent' },
  ],
});
