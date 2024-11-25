import * as Select from "@radix-ui/react-select";

const menuItems = [
  { name: "Blueberry Swirl", price: 2.99, emoji: "🫐" },
  { name: "Choco Latte", price: 3.49, emoji: "🍩" },
  { name: "Birthday Cake", price: 4.99, emoji: "🎂" },
  { name: "Breakfast Special", price: 5.99, emoji: "☕" },
  { name: "The One Ring", price: 6.49, emoji: "⚔️" },
  { name: "Doggo Donut", price: 1.99, emoji: "🐶" },
];

export default function CaterMenu() {
  return (
    <div>
      <Select.Root>
        <Select.Trigger className="p-2 border flex justify-self-center justify-center leading-none border-gray-300 rounded-md">
          Select an item
        </Select.Trigger>
        <Select.Content className="border border-gray-300 rounded-md">
          <Select.Viewport className="bg-blue-400">
            {menuItems.map((item) => (
              <Select.Item className="relative flex items-center h-8" key={item.name} value={item.name}>
                {item.name} {item.price} {item.emoji}
                <Select.SelectItemIndicator className="absolute inline-flex left-0">
                  <span className="text-2xl">👉</span>
                </Select.SelectItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
