# /user

This endpoint allows you to access the authenticated user's information.

### Request:
```
GET https://api.netweak.com/user
```

### Response:
```json
{
    "data": {
        "name": "Lucas Decrock",
        "email": "lucas@decrock.me",
        "email_verified": true,
        "current_team_id": "1",
        "profile_photo_path": "profile-photos/22rJak8b5pqoIksc5GHvyndjAjqyhCBCAa4gN4Nk.png",
        "notification_preferences": {
            "general": [
                "database",
                "mail",
                "telegram"
            ],
            "server_up": [
                "database",
                "telegram"
            ],
            "server_down": [
                "database",
                "telegram"
            ],
            "server_hru": [
                "database",
                "telegram"
            ]
        }
    }
}
```