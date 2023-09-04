export type TechType =
  | 'analytics'
  | 'api'
  | 'app'
  | 'ci'
  | 'db'
  | 'etl'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'network'
  | 'saas'
  | 'storage'
  | 'tool';

export type AllowedKeys =
  | 'adobe'
  | 'airbyte'
  | 'airtable'
  | 'algolia'
  | 'alibabacloud'
  | 'amplitude'
  | 'angular'
  | 'apache_airflow'
  | 'apache_cassandra'
  | 'apache_couchdb'
  | 'apache_flink'
  | 'apache_iceberg'
  | 'apache_kafka'
  | 'apache_spark'
  | 'apache_storm'
  | 'appveyor'
  | 'atlassian'
  | 'auth0'
  | 'aws.dynamodb'
  | 'aws.ec2'
  | 'aws.elasticache'
  | 'aws.glacier'
  | 'aws.lambda'
  | 'aws.rds'
  | 'aws.s3'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws'
  | 'azure.ci'
  | 'azure'
  | 'bash'
  | 'bitbucket'
  | 'bootstrap'
  | 'box'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'circleci'
  | 'cirrusci'
  | 'clickhouse'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codesandboxci'
  | 'contenful'
  | 'couchbase'
  | 'cplusplus'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'datadog'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'docker'
  | 'dropbox'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'elixir'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fabric'
  | 'fastify'
  | 'fastly'
  | 'figma'
  | 'firebase.firestore'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.language'
  | 'gcp.maps'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'gitbook'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'golang'
  | 'googleanalytics'
  | 'grafana'
  | 'hashicorp_vault'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'hubspot'
  | 'huggingface'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'klaviyo'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'logrocket'
  | 'logsnag'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'memcached'
  | 'mixpanel'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nginx'
  | 'nodejs'
  | 'notion'
  | 'okta'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'percona'
  | 'php'
  | 'pingdom'
  | 'placekit'
  | 'platformsh'
  | 'plausible'
  | 'postgresql'
  | 'postman'
  | 'powershell'
  | 'prettier'
  | 'prisma'
  | 'prismacloud'
  | 'puppeteer'
  | 'python'
  | 'rabbitmq'
  | 'react'
  | 'reactemail'
  | 'redis'
  | 'relativeci'
  | 'render'
  | 'renovate'
  | 'resend'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'salesforce'
  | 'scaleway'
  | 'scss'
  | 'sendgrid'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'shopify'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'splunk'
  | 'sqlite'
  | 'sqreen'
  | 'squarespace'
  | 'squareup'
  | 'storybook'
  | 'strapi'
  | 'stripe'
  | 'styleci'
  | 'stylelint'
  | 'supabase.functions'
  | 'supabase.postgres'
  | 'supabase.storage'
  | 'supabase'
  | 'swift'
  | 'tailwind'
  | 'teamcity'
  | 'tencentcloud'
  | 'terraform'
  | 'terragrunt'
  | 'traefik'
  | 'travisci'
  | 'twilio'
  | 'twitter'
  | 'typescript'
  | 'vercel.ai'
  | 'vercel.analytics'
  | 'vercel.blob'
  | 'vercel.kv'
  | 'vercel.postgres'
  | 'vercel'
  | 'vite'
  | 'vue'
  | 'webflow'
  | 'webpack'
  | 'wiz'
  | 'zapier'
  | 'zendesk'
  | 'zookeeper'
  | 'zoom'
  | 'zuora';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
