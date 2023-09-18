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
  | 'alpinejs'
  | 'amplitude'
  | 'angular'
  | 'ansible'
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
  | 'aws.amplify_hosting'
  | 'aws.athena'
  | 'aws.cloudfront'
  | 'aws.cloudsearch'
  | 'aws.codebuild'
  | 'aws.documentdb'
  | 'aws.dynamodb'
  | 'aws.ebs'
  | 'aws.ec2'
  | 'aws.ecs'
  | 'aws.efs'
  | 'aws.eks'
  | 'aws.elasticache'
  | 'aws.fargate'
  | 'aws.glacier'
  | 'aws.lambda'
  | 'aws.lightsail'
  | 'aws.mq'
  | 'aws.neptune'
  | 'aws.opensearch'
  | 'aws.rds'
  | 'aws.redshift'
  | 'aws.s3'
  | 'aws.sagemaker'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws'
  | 'azure.ci'
  | 'azure'
  | 'bash'
  | 'bigcommerce'
  | 'bitbucket'
  | 'bootstrap'
  | 'box'
  | 'brevo'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'circleci'
  | 'cirrusci'
  | 'clickhouse'
  | 'cloudflare.pages'
  | 'cloudflare.workers'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codecov'
  | 'codesandboxci'
  | 'contenful'
  | 'couchbase'
  | 'coveralls'
  | 'cplusplus'
  | 'crowdin'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'databricks'
  | 'datadog'
  | 'dataiku'
  | 'datastax'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'discourse'
  | 'docker'
  | 'doctrinephp'
  | 'docusign'
  | 'dropbox'
  | 'dynatrace'
  | 'elasticcloud'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'electron'
  | 'elixir'
  | 'emberjs'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fabric'
  | 'facebook'
  | 'fastify'
  | 'fastly'
  | 'figma'
  | 'firebase.firestore'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.appengine'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.dataflow'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dialogflow'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.kms'
  | 'gcp.language'
  | 'gcp.maps'
  | 'gcp.memorystore'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.spanner'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.tasks'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'gitbook'
  | 'gitguardian'
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
  | 'hypertune'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'klarna'
  | 'klaviyo'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'laravel'
  | 'launchdarkly'
  | 'lemonsqueezy'
  | 'lighthouse'
  | 'logrocket'
  | 'logsnag'
  | 'magento'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'matomo'
  | 'meilisearch'
  | 'memcached'
  | 'meteorjs'
  | 'mithriljs'
  | 'mixpanel'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nextcloud'
  | 'nextjs'
  | 'nginx'
  | 'nodejs'
  | 'notion'
  | 'nuxtjs'
  | 'okta'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'percona'
  | 'php'
  | 'phppest'
  | 'phpstan'
  | 'phpunit'
  | 'pingdom'
  | 'placekit'
  | 'planetscale'
  | 'platformsh'
  | 'plausible'
  | 'playwright'
  | 'postgresql'
  | 'postman'
  | 'postmark'
  | 'powershell'
  | 'preactjs'
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
  | 'sanity'
  | 'scaleway'
  | 'scss'
  | 'sendgrid'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'shopify'
  | 'sitecore.xmlcloud'
  | 'sitecore'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'solidjs'
  | 'splitio'
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
  | 'sveltejs'
  | 'swift'
  | 'symfony'
  | 'tailwind'
  | 'teamcity'
  | 'tencentcloud'
  | 'terraform'
  | 'terragrunt'
  | 'tinybird'
  | 'traefik'
  | 'travisci'
  | 'trufflesecurity'
  | 'twigphp'
  | 'twilio'
  | 'twitter'
  | 'typescript'
  | 'upstash.kafka'
  | 'upstash.qstash'
  | 'upstash.redis'
  | 'upstash'
  | 'vercel.ai'
  | 'vercel.analytics'
  | 'vercel.blob'
  | 'vercel.kv'
  | 'vercel.postgres'
  | 'vercel'
  | 'vialink'
  | 'vite'
  | 'vue'
  | 'webflow'
  | 'webpack'
  | 'wiz'
  | 'woocommerce'
  | 'wordpress'
  | 'yii2'
  | 'yii2'
  | 'yousign'
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
