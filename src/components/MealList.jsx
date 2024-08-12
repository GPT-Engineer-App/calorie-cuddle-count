import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MealList = ({ meals, totalCalories }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Meals</CardTitle>
      </CardHeader>
      <CardContent>
        {meals.map((meal) => (
          <div key={meal.id} className="flex justify-between items-center mb-2">
            <span>{meal.name}</span>
            <span>{meal.calories} cal</span>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <strong>Total Calories: {totalCalories}</strong>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealList;
