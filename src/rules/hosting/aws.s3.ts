import { register } from '../../register.js';

register({
  tech: 'aws.s3',
  name: 'S3',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-s3' },
    { type: 'docker', name: 'adobe/s3mock' },
    { type: 'rust', name: 'aws-sdk-s3' },
    { type: 'ruby', name: 'aws-sdk-s3' },
  ],
});
