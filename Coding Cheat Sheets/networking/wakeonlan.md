# Wake On LAN (WOL)

**Wake on LAN (WoL)** is a network protocol that allows a device to be powered on remotely over a network connection. It works by sending a special frame, called a **magic packet**, to the device's MAC address, which triggers the device to power on from a low-power state.

## Magic Packet

The **magic packet** contains the device's MAC address and a special sequence of bytes that the device recognizes as a **magic packet**. It consists of a 6-byte header (FF FF FF FF FF FF) followed by the repetition of the target device's MAC address 16 times, resulting in a total packet size of 102 bytes.

It is typically sent as a broadcast using the [UDP](Coding%20Cheat%20Sheets/networking/udp.md) protocol on port 0, 7, or 9 or directly over Ethernet as EtherType 0x0842. However, it's worth noting that **Wake on LAN (WoL)** can also be sent as a unicast packet. In a unicast configuration, the **magic packet** is sent directly to the specific IP address of the target device instead of being broadcasted to all devices on the network. This requires knowing the IP address of the device in advance.

## Enabling Wake on LAN (WoL)

The target device must be properly configured to listen for and respond to the **magic packet**, in order for **Wake on LAN (WoL)** to work. This usually involves enabling **Wake on LAN (WoL)** in the BIOS or UEFI settings of the device, and enabling **Wake on LAN (WoL)** for the network interface in the operating system.

Additionally, some networking equipment or firewalls might block or restrict UDP broadcasts, which could affect the successful transmission of the **magic packet**.

### Enable Wake on LAN (WoL) in BIOS or UEFI

Most modern computers have a setting in the BIOS or UEFI settings that allows you to enable or disable **Wake on LAN (WoL)** for the network interface. This setting is usually found under the **Power Management** or **Power Options** section of the BIOS or UEFI settings.

### Enable Wake on LAN (WoL) in the operating system

Some operating systems have settings that can enable or disable **Wake on LAN (WoL)** for network interfaces. For example, on [Linux](Coding%20Cheat%20Sheets/linux/linux.md), you can use the [ethtool](ethtool.md) command to enable **Wake on LAN (WoL)** for a network interface.

#### Enable Wake on LAN (WoL) on Linux

Use the following command to check if your network interface supports Wake On LAN (WoL):

```sh
sudo ethtool interface_name | grep "Wake-on"
```

This is an example output:

```txt
Supports Wake-on: pumbg
Wake-on: d
```

If the output shows "Wake-on: d", it means that Wake On LAN (WoL) is disabled.

The following table shows the different values that can be displayed for the "Wake-on" setting:

| Value | Description |
| --- | --- |
| `d` | Wake On LAN (WoL) is disabled |
| `p` | Wake On LAN (WoL) is enabled for unicast packets |
| `u` | Wake On LAN (WoL) is enabled for unicast and broadcast packets |
| `m` | Wake On LAN (WoL) is enabled for multicast packets |
| `b` | Wake On LAN (WoL) is enabled for broadcast packets |
| `a` | Wake On LAN (WoL) is enabled for ARP packets |
| `g` | Wake On LAN (WoL) is enabled for Magic packets |

To enable Wake On LAN (WoL), use the following command:

```sh
sudo ethtool -s interface_name wol g
```

### Make the Wake On LAN (WoL) setting persistent across reboots

To make the Wake On LAN (WoL) setting persistent across reboots, add the following line to the `/eth/network/interfaces` file:

```sh
post-up /usr/sbin/ethtool -s interface_name wol g
```

## Sending Magic Packets

Once **Wake on LAN (WoL)** is enabled, you can use a utility like [etherwake](etherwake.md) or `wakeonlan` to send **magic packets** to wake up the device remotely.

## Troubleshooting

If you are having trouble getting **Wake on LAN (WoL)** to work, here are some things you can try:

1. Make sure that **Wake on LAN (WoL)** is enabled in the BIOS or UEFI settings of the device you are trying to wake up.
2. Make sure that **Wake on LAN (WoL)** is enabled for the network interface on the device you are trying to wake up.
3. Make sure that the network interface is connected to a network that is configured to allow **Wake on LAN (WoL)**.

If you're still not able to get **Wake on LAN (WoL)** to work, you can try using a different utility to send the magic packet. For example, if you're using [etherwake](etherwake.md), you can try using `wakeonlan` instead.

### Capturing Wake on LAN (WoL) packets

If you're having trouble getting **Wake on LAN (WoL)** to work, you can try capturing the magic packet with a packet sniffer like [Wireshark](wireshark.md), or [TcpDump](tcpdump.md) to see if it is being sent correctly. If you don't see any packets being sent, then there may be a problem with the network interface or network configuration.

```sh
tcpdump -ni any ether proto 0x0842 or udp port 9 2>/dev/null
```

This is an example packet.

```sh
16:19:27.965101 enp3s0 Out IP 10.50.0.19.43610 > 10.50.0.5.9: UDP, length 102
```

### Logging Wake on LAN (WoL) packets

Starting with Windows Vista, the operating system logs all wake sources in the `system` event log. The Event Viewer and the `powercfg.exe /lastwake` command can retrieve them.
