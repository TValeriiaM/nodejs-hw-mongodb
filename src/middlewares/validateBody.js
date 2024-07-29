import createHttpError from 'http-errors';

export function validateBody(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });

      next();
    } catch (error) {
      console.log({ message: error.message });
      console.log({ details: error.details });

      next(
        createHttpError(
          400,
          error.details.map((err) => err.message).join(', '),
        ),
      );
    }
  };
}

/// З цією функцією видає тільки 400 помилку, не видає різновид помилки

// export const validateBody = (schema) => async (req, res, next) => {
//   try {
//     await schema.validateAsync(req.body, {
//       abortEarly: false,
//     });
//     next();
//   } catch (err) {
//     const error = createHttpError(400, 'Bad Request', {
//       errors: err.details,
//     });
//     next(error);
//   }
// };
