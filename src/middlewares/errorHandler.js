// import { HttpError } from 'http-errors';
import { isHttpError } from 'http-errors';

export const errorHandler = (err, _req, res) => {
  /// Ось цей код з конспекту не спрацював, видавало помилку 500 на неіснуючий ID контакту..///

  //   if (err instanceof HttpError) {
  //     res.status(err.status).json({
  //       status: err.status,
  //       message: err.name,
  //       data: err,
  //     });
  //     return;
  //   }

  if (isHttpError(err) === true) {
    return res.status(err.status).send({
      status: err.status,
      message: err.message,
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
