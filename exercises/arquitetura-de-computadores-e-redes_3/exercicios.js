const exercicios = {
  1: 'iptables -A INPUT -p icmp -j REJECT',
  2: 'sudo iptables -D INPUT -p icmp -j REJECT',
  3: 'iptables -A OUTPUT -p  tcp --dport 443 -j REJECT',
  4: 'iptables -A OUTPUT -p  tcp --dport 80 -j REJECT',
  5: 'iptables --flush',
};
