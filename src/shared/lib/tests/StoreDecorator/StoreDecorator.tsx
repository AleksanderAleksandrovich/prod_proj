import { StoryFn } from "@storybook/react/*";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (Story: StoryFn, context: any) => {
  const {
    parameters: { redux: { initialState } = {} },
  } = context;
  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  );
};
