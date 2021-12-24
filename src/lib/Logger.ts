import { createLogger, transports, format, } from "winston";
export { Logger as ILogger } from 'winston'
import { join } from 'path'
export const Logger = createLogger({
    level: "debug",
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        }),
        // Errro logs
        new transports.File({
            level: "error",
            filename: join(__dirname, '../', `logs/errors.log`),
        })
    ],
});

