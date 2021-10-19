# /servers

This endpoint allows you to manage monitored servers.


## Index

List all the servers in the current team.

### Request:
```
GET https://api.netweak.com/servers
```

### Response:
```json
{
    "servers": [
        {
            "name": "Docker AWS #1",
            "hostname": null,
            "ip": null,
            "status": "online",
            "data": {
                "version": "1.1.0",
                "uptime": "10287853",
                "sessions": "1",
                "processes": "103",
                "processes_array": [
                    {
                        "command": "kworker/1:2-events",
                        "count": 1,
                        "user": "root",
                        "cpu": "0.0",
                        "memory": "0"
                    },
                    ...
                ],
                "file_handles": "1408",
                "file_handles_limit": "9223372036854775807",
                "os_kernel": "4.19.0-8-amd64",
                "os_name": "Debian GNU/Linux",
                "os_arch": "x64",
                "cpu_name": "AMD EPYC 7281 16-Core Processor",
                "cpu_cores": "2",
                "cpu_freq": "2096.062",
                "ram_total": "2088206336",
                "ram_usage": "989745152",
                "swap_total": "0",
                "swap_usage": "0",
                "disk_array": [
                    {
                        "label": "/dev/vda1",
                        "total": "19446636544",
                        "usage": "8941633536"
                    }
                ],
                "disk_total": "19549863936",
                "disk_usage": "8941897728",
                "connections": "29",
                "nic": "ens2",
                "ipv4": "10.22.230.163",
                "ipv6": "2001:bc8:47a8:2251::1",
                "rx_total": "54972213637",
                "tx_total": "26451020661",
                "rx_current": "102791",
                "tx_current": "89121",
                "load_avg": [
                    1.43,
                    0.57,
                    0.57
                ],
                "load_cpu": 39,
                "load_io": "45",
                "ping_eu": "0",
                "ping_us": "0",
                "ping_as": "0"
            },
            "status_updated_at": "2021-10-03T16:10:11.000000Z"
        },
        {
            "name": "New server",
            "hostname": null,
            "ip": null,
            "status": "pending",
            "data": null,
            "status_updated_at": null
        },
        ...
    ]
}
```


## Show

Show a specific server using it's id.

### Request:
```
GET https://api.netweak.com/servers/$id
```

### Response:
```json
{
    "data": {
        "id": "lKj9q",
        "name": "Test",
        "hostname": null,
        "ip": null,
        "payload": {
            "version": "1.1.0",
            "uptime": "10287853",
            "sessions": "1",
            "processes": "103",
            "processes_array": [
                {
                    "command": "php7.4",
                    "count": 1,
                    "user": "root",
                    "cpu": "5.1",
                    "memory": "51212"
                },
                ...
            ],
            "file_handles": "1408",
            "file_handles_limit": "9223372036854775807",
            "os_kernel": "4.19.0-8-amd64",
            "os_name": "Debian GNU/Linux",
            "os_arch": "x64",
            "cpu_name": "AMD EPYC 7281 16-Core Processor",
            "cpu_cores": "2",
            "cpu_freq": "2096.062",
            "ram_total": "2088206336",
            "ram_usage": "989745152",
            "swap_total": "0",
            "swap_usage": "0",
            "disk_array": [
                {
                    "label": "/dev/vda1",
                    "total": "19446636544",
                    "usage": "8941633536"
                }
            ],
            "disk_total": "19549863936",
            "disk_usage": "8941897728",
            "connections": "29",
            "nic": "ens2",
            "ipv4": "10.64.234.163",
            "ipv6": "2001:bc8:47a8:2551::1",
            "rx_total": "54972213637",
            "tx_total": "26451020661",
            "rx_current": "102791",
            "tx_current": "89121",
            "load_avg": [
                1.43,
                0.57,
                0.57
            ],
            "load_cpu": 39,
            "load_io": "45",
            "ping_eu": "0",
            "ping_us": "0",
            "ping_as": "0"
        },
        "last_check": {
            "id": 1558,
            "server_id": "17",
            "data": {
                "ram_usage": "989745152",
                "swap_usage": "0",
                "disk_usage": "8941897728",
                "rx_current": "102791",
                "tx_current": "89121",
                "load_avg": 0.57,
                "load_cpu": 39,
                "load_io": "45",
                "ping_eu": "0",
                "ping_us": "0",
                "ping_as": "0"
            },
            "created_at": "2021-10-03T16:10:11.000000Z"
        },
        "status": "online",
        "status_updated_at": "2021-10-03T16:10:11.000000Z"
    }
}
```


## Store

Store a new server.

### Request:
```
POST https://api.netweak.com/servers
```

### Parameters:
```
name: 'required|string|max:50'
```

### Response:
```json
{
    "success": true,
    "message": "Server has been created successfully.",
    "token": "4c110dd63b48d91f3ca37d838b4a8b78d392c5e417d526c1ca3a90cd4419"
}
```


## Update

Update a server's settings.

### Request:
```
PATCH https://api.netweak.com/servers/$id
```

### Parameters:
```
name: 'required|string|max:50'
tolerance: 'required|integer|min:0|max:120'
```

### Response:
```json
{
    "success": true,
    "message": "Server has been updated successfully."
}
```


## Destroy

Delete a specific server using it's id.

### Request:
```
DELETE https://api.netweak.com/servers/$id
```

### Response:
```json
{
    "success": true,
    "message": "Server has been deleted successfully."
}
```