export class ResponseHandler {
  constructor(
    success: boolean,
    data: any,
    statusCode: number,
    message?: string,
  ) {
    this.success = success;
    this.data = data;
    this.statusCode = statusCode;
    this.message = message || undefined;
  }
  success: boolean;
  data: any;
  statusCode: number;
  message?: string;
}
