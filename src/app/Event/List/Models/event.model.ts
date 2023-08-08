export class EventModel {
  id?: number;
  gps_location?: string;
  date_time?: string;
  status?: string;
  county?: string;
  district?: string;
  locality?: string;
  location?: string;

  constructor(
    id?: number,
    gps_location?: string,
    status?: string,
    county?: string,
    district?: string,
    locality?: string,
    location?: string
  ) {
    this.id = id;
    this.gps_location = gps_location;
    this.status = status;
    this.county = county;
    this.district = district;
    this.locality = locality;
    this.location = location;
  }
}
