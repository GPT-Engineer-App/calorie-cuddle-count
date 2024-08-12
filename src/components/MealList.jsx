import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const MealList = ({ meals, totalCalories, onEdit, onDelete }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Meals</CardTitle>
      </CardHeader>
      <CardContent>
        {meals.map((meal) => (
          <div key={meal.id} className="flex justify-between items-center mb-4 pb-2 border-b">
            <div>
              <span className="font-medium">{meal.name}</span>
              <span className="ml-2 text-sm text-gray-500">{meal.calories} cal</span>
            </div>
            <div>
              <Button variant="ghost" size="icon" onClick={() => onEdit(meal)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onDelete(meal.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-gray-200 text-right">
          <strong>Total Calories: {totalCalories}</strong>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealList;
