export const QUERY_URL = `ws${location.protocol === "https:" ? "s" : ""}://chatbot-server-q4e4awr4aq-uc.a.run.app/ws`;

export const NO_SOURCES_INFO_COPIES = [
  "Hmm, I couldn't find any nutrition sources to help with this query, but I'll try to help as best as I can:",
  "My search for nutrition sources to assist with this query came up empty-handed. However, I'll do my best to provide assistance based on my knowledge:",
  "I couldn't come across any nutrition sources that directly address this query, but I'll still try my best to provide assistance:",
  "It seems I don't have't any nutrition sources pertaining to this question, but I'll do my utmost to assist you regardless:",
];

export function generateRandomCopyText(copies: string[]): string {
  const randomIndex = Math.floor(Math.random() * copies.length);
  return copies[randomIndex];
}
