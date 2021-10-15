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