import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import MealList from '@/components/MealList';

const Index = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({ name: '', calories: '' });
  const [editingMeal, setEditingMeal] = useState(null);

  const addMeal = () => {
    if (newMeal.name && newMeal.calories) {
      if (editingMeal) {
        setMeals(meals.map(meal => meal.id === editingMeal.id ? { ...newMeal, id: editingMeal.id } : meal));
        setEditingMeal(null);
      } else {
        setMeals([...meals, { ...newMeal, id: Date.now() }]);
      }
      setNewMeal({ name: '', calories: '' });
    }
  };

  const editMeal = (meal) => {
    setEditingMeal(meal);
    setNewMeal({ name: meal.name, calories: meal.calories });
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  const totalCalories = meals.reduce((sum, meal) => sum + Number(meal.calories), 0);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Daily Calorie Counter</h1>
      
      <div className="max-w-md mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingMeal ? 'Edit Meal' : 'Add New Meal'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Input
                placeholder="Meal name"
                value={newMeal.name}
                onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Calories"
                value={newMeal.calories}
                onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
              />
              <Button onClick={addMeal}>
                <PlusCircle className="mr-2 h-4 w-4" /> {editingMeal ? 'Update Meal' : 'Add Meal'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <MealList meals={meals} totalCalories={totalCalories} onEdit={editMeal} onDelete={deleteMeal} />
      </div>
    </div>
  );
};

export default Index;
