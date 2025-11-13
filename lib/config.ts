import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "How can I upgrade my membership?",
    prompt: "How can I upgrade or reactivate my membership?",
    icon: "circle-question",
  },
  {
    label: "Are these live classes?",
    prompt: "Are these live classes?",
    icon: "circle-question",
  },
  {
    label: "Do you offer beginner classes?",
    prompt: "Do you offer beginner classes?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "light" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
    radius: 'pill',
    density: 'normal',
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
