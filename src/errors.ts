export class SparkError extends Error {
  readonly name: string = 'SparkError';
  readonly message: string;
  readonly origin?: Error;

  constructor(error: { name?: string; message: string; origin?: Error }) {
    super(error.message);
    Object.assign(this, error);
    this.message = JSON.stringify(error, undefined, 2);
  }
}
