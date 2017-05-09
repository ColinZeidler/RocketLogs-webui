import { User } from './user'

export class Rocket {
  id: number;
  name: string;
  owner: number;
  owner_name: string;
  flight_count: number;
  weight: number;
  max_motor_diam: number;
  max_altitude: number;
  flights: number[];
}