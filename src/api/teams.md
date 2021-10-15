# Working with teams

The Netweak platform allows you to create multiple teams with numerous users, or join existing ones.

By default requests made to the Netweak uses your automatically managed "personnal" team. In order to access resources in a specific team you need to append the team ID to the request.

:::tip
These steps are **only required if you have multiple teams** and you want to access data in a single other than the default one.
:::

## Retreiving teams

### Request
```
GET https://api.netweak.com/teams
```

### Response
```json
{
    "teams": [
        {
            "id": 1,
            "user_id": "1",
            "name": "Lucas's Team",
            "personal_team": true,
            "created_at": "2021-05-09T10:34:17.000000Z",
            "updated_at": "2021-05-09T10:34:17.000000Z"
        }
    ]
}
```

## Specifying a team

Append ```?team_id=``` followed by the team ID to any URL to access as this specific team.

### Example
```
GET https://api.netweak.com/servers?team_id=17
```