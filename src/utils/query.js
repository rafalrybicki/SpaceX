import { gql } from "@apollo/client";

export const QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      links {
        wikipedia
      }
      launch_site {
        site_name_long
        site_name
      }
      launch_date_local
      rocket {
        rocket_name
        fairings {
          recovered
        }
      }
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`