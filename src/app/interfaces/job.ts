export interface Job{
	place: {location: any, remote: boolean},
	compensation: {minAmount: number, maxAmount: number, currency: string},
	details: any,
	objective: string,
	owner: {name: string},
	strengths: any,
	timezones: any
}