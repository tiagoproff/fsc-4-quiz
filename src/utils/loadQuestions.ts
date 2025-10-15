export async function loadQuestions(category: string, level: string) {
  try {
    const module = await import(`../data/questions/${category}/${level}.json`);
    return module.default;
  } catch (err) {
    console.error("Erro ao carregar perguntas:", err);
    return [];
  }
}
