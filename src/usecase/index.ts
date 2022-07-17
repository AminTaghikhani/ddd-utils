export interface UseCase<Input, Output> {
  execute(input: Input): Promise<Output>;
}
export interface UseCaseSync<Input, Output> {
  execute(input: Input): Output;
}
