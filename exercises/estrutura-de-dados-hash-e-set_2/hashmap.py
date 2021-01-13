class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
            else:
                return None

    def has(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item is not None


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    hash = HashMap()

    for id_num, name in employees:
        hash.insert(Employee(id_num, name))
    for i in [14, 23, 10, 9]:
        print(hash.get_value(i))
