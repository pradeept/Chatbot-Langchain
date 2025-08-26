import { ChatPerplexity } from "@langchain/community/chat_models/perplexity";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const llm = new ChatPerplexity({
  model: "sonar",
  temperature: 0,
  maxTokens: undefined,
  timeout: undefined,
  maxRetries: 2,
  apiKey: process.env.PERPLEXITY_API_KEY,
});

export async function perplexity(
  language: string | null,
  input?: string | null
) {
  if (!language || !input) {
    return false;
  }
  // SIMPLE PROMPT INVOCATION

  // const aiMsg = await llm.invoke([
  //   {
  //     role: "system",
  //     content:
  //       "You are a helpful assistant that translates English to French. Translate the user sentence.",
  //   },
  //   {
  //     role: "user",
  //     content: "I love programming.",
  //   },
  // ]);
  // return aiMsg;

  // PROMPT TEMPLATE
  const template1 = 'The translation of "{input}" into {language} is:';
  const template2 = "Here is the translation of your input into {language}:";

  const system = `You are a translator. Translate the user's input from English into {language}.  
- If the input contains fewer than 10 words, begin your response with: ${template1}.  
- If the input contains 10 words or more, begin your response with: ${template2}.  
Only provide the translation itself — do not add explanations, formatting symbols (e.g., asterisks), reference numbers, or extra details.
`

  const translatorTemplate = ChatPromptTemplate.fromMessages([
    ["system", system],
    ["human", "Translate {input} into {language}"],
  ]);

  const chain = translatorTemplate.pipe(llm);
  // const perpResponse = await chain.invoke({
  //   input,
  //   language,
  // });

  const streamResp = await chain.stream({ input, language });
  console.log("Stream type: ", typeof streamResp);

  return streamResp;
}
