// @ts-nocheck
// Preventing TS checks with files presented in the video for a better presentation.
import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env, provider: string) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */

  switch (provider) {
    case 'Anthropic':
      return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY;
    case 'OpenAI':
      return env.OPENAI_API_KEY || cloudflareEnv.OPENAI_API_KEY;
    case 'Google':
      return env.GOOGLE_GENERATIVE_AI_API_KEY || cloudflareEnv.GOOGLE_GENERATIVE_AI_API_KEY;
    case 'Groq':
      return env.GROQ_API_KEY || cloudflareEnv.GROQ_API_KEY;
    case 'OpenRouter':
      return env.OPEN_ROUTER_API_KEY || cloudflareEnv.OPEN_ROUTER_API_KEY;
    case 'Deepseek':
      return env.DEEPSEEK_API_KEY || cloudflareEnv.DEEPSEEK_API_KEY
    case 'Mistral':
      return env.MISTRAL_API_KEY || cloudflareEnv.MISTRAL_API_KEY;        
    case "OpenAILike":
      return env.OPENAI_LIKE_API_KEY || cloudflareEnv.OPENAI_LIKE_API_KEY;
    case "Cerebras":
      return env.CEREBRAS_API_KEY || cloudflareEnv.CEREBRAS_API_KEY;
    case 'Bedrock':
      return env.AMAZON_BEDROCK_API_KEY || cloudflareEnv.AMAZON_BEDROCK_API_KEY;
    default:
      return "";
  }
}

export function getBaseURL(cloudflareEnv: Env, provider: string) {
  switch (provider) {
    case 'OpenAILike':
      return env.OPENAI_LIKE_API_BASE_URL || cloudflareEnv.OPENAI_LIKE_API_BASE_URL;
    case 'Ollama':
        return env.OLLAMA_API_BASE_URL || cloudflareEnv.OLLAMA_API_BASE_URL || "http://localhost:11434";
    case 'AmazonBedrock':
        return env.AWS_REGION || cloudflareEnv.AWS_REGION;
    default:
      return "";
  }
}

export function getSecretKey(cloudflareEnv: Env, provider: string) {
  if (provider === 'AmazonBedrock') {
    return env.AWS_SECRET_ACCESS_KEY || cloudflareEnv.AWS_SECRET_ACCESS_KEY;
  }
  return "";
}