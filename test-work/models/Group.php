<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;


class Group extends \yii\db\ActiveRecord
{
    public $student;

    public static function tableName()
    {
        return 'group';
    }

    public function rules()
    {
        return [
            [['number'], 'string', 'max' => 255],
            [['number'], 'required'],
            [['number'], 'trim'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'number' => 'Номер группы',
        ];
    }

    public function getStudent(){
       // return $this->hasOne(Student::className(), ['id_group' => 'id']);
      //  return $this->hasMany(Student::classname(), ['id_group' => 'id']);
    }

    public static function getList(){
        return ArrayHelper::map(self::find()->all(), 'id', 'number');
    }
}
