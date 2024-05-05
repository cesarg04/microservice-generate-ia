import OpenAI from 'openai';

export const generateInfoIa = async (title: string) => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: `${ title }` }],
        model: "gpt-3.5-turbo-16k-0613",

    });

    return {
        iaContent: completion.choices[0].message.content
    }
}