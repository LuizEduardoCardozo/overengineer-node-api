import { createHmac } from 'crypto';
import { passwordSecret } from '../config/general';

export function getSha256(password: string): string {
	return createHmac('sha256', passwordSecret).update(password).digest('base64');
}
