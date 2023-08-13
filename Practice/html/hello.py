print(
        "\n".join(
            [
                "".join(
                    [
                        (
                            "Graphlove"[(x-y) % 8]
                            if((x*8.85)**2 + (y*8.1)**2 -1)**3 - (x*8.85)**2*(y*8.1)**3 <= 8
                            else " "
                        )
                        for x in range(-38,38)
                    ]
                )
                for y in range(15,-15,-1)
            ]
        )
)